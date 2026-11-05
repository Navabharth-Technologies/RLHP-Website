import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Generates and downloads a real formatted PDF document (.pdf) containing BOTH the photo AND wording text.
 */
export async function downloadPDFDocument(item) {
  if (!item) return false;

  const title = item.title || 'RLHP Official Field Report';
  const category = item.category || item.type || 'Child & Community Development';
  const date = item.date || 'Official Field Record';
  const location = item.location || 'Mysuru, Karnataka, India';
  const wordings = item.content || item.summary || item.description || 'Official field report document from Rural Literacy & Health Programme (RLHP), Mysuru.';
  const author = item.author || 'RLHP Communications Team';
  const imageUrl = item.image || item.remoteImage || item.downloadUrl || '';

  // Create temporary container for PDF layout
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '-9999px';
  container.style.left = '-9999px';
  container.style.width = '794px'; // A4 width at 96 DPI
  container.style.backgroundColor = '#ffffff';
  container.style.padding = '36px 40px';
  container.style.fontFamily = "'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
  container.style.boxSizing = 'border-box';
  container.style.color = '#111827';

  container.innerHTML = `
    <div style="border-bottom: 3px solid #1b4332; padding-bottom: 16px; margin-bottom: 20px;">
      <h1 style="color: #1b4332; font-size: 24px; font-weight: 800; margin: 0; line-height: 1.2;">
        Rural Literacy & Health Programme (RLHP)
      </h1>
      <p style="color: #2d6a4f; font-size: 13px; font-weight: 700; margin: 6px 0 0 0;">
        Mysuru, Karnataka, India • Est. 1983 • Registered NGO #36/83-84
      </p>
    </div>

    <div style="display: inline-block; background-color: #fff3e0; color: #e65100; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 16px; text-transform: uppercase; margin-bottom: 12px;">
      ${category}
    </div>

    <h2 style="font-size: 20px; font-weight: 800; color: #111827; margin: 0 0 12px 0; line-height: 1.3;">
      ${title}
    </h2>

    <div style="background-color: #f3f4f6; padding: 10px 14px; border-left: 4px solid #2d6a4f; font-size: 11.5px; color: #4b5563; margin-bottom: 20px; border-radius: 4px;">
      <strong>Program Domain:</strong> ${category} &nbsp;|&nbsp; 
      <strong>Location:</strong> ${location} &nbsp;|&nbsp; 
      <strong>Date / Author:</strong> ${date} (${author})
    </div>

    ${imageUrl ? `
    <div style="text-align: center; margin: 20px 0;">
      <img src="${imageUrl}" crossOrigin="anonymous" style="max-width: 100%; max-height: 380px; border-radius: 10px; border: 1px solid #d1d5db; object-fit: contain;" />
    </div>
    ` : ''}

    <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 20px; margin-top: 16px;">
      <div style="font-size: 14px; font-weight: 800; color: #1b4332; border-bottom: 2px solid #f3f4f6; padding-bottom: 6px; margin-bottom: 12px;">
        Document Description & Field Wordings
      </div>
      <div style="font-size: 13px; color: #374151; line-height: 1.65; white-space: pre-wrap;">
        ${wordings}
      </div>
    </div>

    <div style="margin-top: 30px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 10.5px; color: #6b7280; text-align: center; line-height: 1.5;">
      <p style="margin: 0; font-weight: 700; color: #1b4332;">Rural Literacy & Health Programme (RLHP)</p>
      <p style="margin: 2px 0;">No. 343, 2nd Stage, Gayathripuram, Udayagiri Post, Mysuru, Karnataka, India – 570019.</p>
      <p style="margin: 2px 0;">Phones: 0821 2454696, 0821 2451216 | Email: mysore@rlhp.org</p>
    </div>
  `;

  document.body.appendChild(container);

  try {
    const images = container.querySelectorAll('img');
    for (let img of images) {
      if (!img.complete) {
        await new Promise((res) => {
          img.onload = res;
          img.onerror = res;
        });
      }
    }

    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.95);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

    const sanitizedTitle = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');

    const fileName = `${sanitizedTitle || 'RLHP_Document'}.pdf`;
    pdf.save(fileName);

    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
    return true;
  } catch (err) {
    console.error("PDF generation fallback:", err);
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
    const printWin = window.open('', '_blank');
    if (printWin) {
      printWin.document.write(`
        <html>
          <head><title>${title}</title></head>
          <body onload="window.print(); window.close();">
            ${container.innerHTML}
          </body>
        </html>
      `);
      printWin.document.close();
    }
    return true;
  }
}

/**
 * Helper to download raw image file directly.
 */
export async function downloadFileInBrowser(fileUrl, fileTitle = 'rlhp-media') {
  if (!fileUrl) return false;

  const sanitizedTitle = fileTitle
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  let extension = 'jpg';
  if (fileUrl.endsWith('.pdf')) extension = 'pdf';
  else if (fileUrl.endsWith('.png')) extension = 'png';
  else if (fileUrl.endsWith('.webp')) extension = 'webp';
  else if (fileUrl.endsWith('.mp4')) extension = 'mp4';

  const fileName = `${sanitizedTitle || 'rlhp-download'}.${extension}`;

  try {
    const response = await fetch(fileUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
      window.URL.revokeObjectURL(blobUrl);
    }, 300);

    return true;
  } catch (err) {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = fileUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 300);

    return true;
  }
}
