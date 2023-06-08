function doGet() {
  
  let html = HtmlService.createTemplateFromFile('index');
 
  return html.evaluate()
  .setTitle('Anydesk')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setFaviconUrl('https://laverdadnoticias.com/__export/1513690711210/sites/laverdad/arte/apps/favicon.png_2040392579.png');

}
