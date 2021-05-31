import { backendUrl } from '@/config/index'

const output = ({
  id,
  date,
  time,
  name,
  phone,
  email,
  cityRu,
  countryRu,
  utmSource,
  utmMedium,
  utmCampaign,
  utmContent,
  utmTerm,
  utmWorker
}) => {
  console.log(utmSource)
  return /* html */ `
  <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
  <html style='width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;'>
  <head> 
  <meta charset='UTF-8'> 
  <meta content='width=device-width, initial-scale=1' name='viewport'> 
  <meta name='x-apple-disable-message-reformatting'> 
  <meta http-equiv='X-UA-Compatible' content='IE=edge'> 
  <meta content='telephone=no' name='format-detection'> 
  <title>Новая заявка с ${backendUrl}</title> 
  <!--[if (mso 16)]>
  <style type='text/css'>
  a {text-decoration: none;}
  </style>
  <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <style>
  @media only screen and (max-width: 600px) {p, ul li, ol li, a { font-size: 16px } h1 { font-size: 30px; text-align: center } h2 { font-size: 26px; text-align: center } h3 { font-size: 20px; text-align: center } h1 a { font-size: 30px } h2 a { font-size: 26px } h3 a { font-size: 20px } .es-menu td a { font-size: 16px !important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size: 16px } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size: 16 px } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size: 12px } *[class='gmail-fix'] { display: none !important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align: center !important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align: right !important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align: left !important } .es-m-txt-r a img, .es-m-txt-c a img, .es-m-txt-l a img { display: inline !important } .es-button-border { display: block !important } .es-button { font-size: 20px !important; display: block !important; border-width: 10px 0px 10px 0px !important } .es-btn-fw { border-width: 10px 0px !important; text-align: center !important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width: 100% !important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width: 100% !important; max-width: 600px !important } .es-adapt-td { display: block !important; width: 100% !important } .adapt-img { width: 100% !important; height: auto !important } .es-m-p0 { padding: 0px !important } .es-m-p0r { padding-right: 0px !important } .es-m-p0l { padding-left: 0px !important } .es-m-p0t { padding-top: 0px !important } .es-m-p0b { padding-bottom: 0 !important } .es-m-p20b { padding-bottom: 20px !important } .es-hidden { display: none !important } table.es-table-not-adapt, .esd-block-html table { width: auto !important } table.es-social { display: inline-block !important } table.es-social td { display: inline-block !important } }
  
  #outlook a {
  padding: 0;
  }
  .ExternalClass {
  width: 100%;
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
  line-height: 100%;
  }
  .es-button {
  mso-style-priority: 100 !important;
  text-decoration: none !important;
  }
  a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  }
  </style> 
  </head> 
  <body style='width:100%;font-family:arial, "helvetica neue", helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;margin:0;'> 
  <div class='es-wrapper-color' style='background-color:#F6F6F6;'> 
  <!--[if gte mso 9]>
  <v:background xmlns:v='urn:schemas-microsoft-com:vml' fill='t'>
      <v:fill type='tile' src='' color='#f6f6f6'></v:fill>
  </v:background>
  <![endif]--> 
  <table cellpadding='0' cellspacing='0' class='es-wrapper' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;'> 
  <tbody> 
   <tr style='border-collapse:collapse;'> 
    <td valign='top' style='padding:0;Margin:0;'> 
     <table cellpadding='0' cellspacing='0' class='es-header' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;'> 
      <tbody> 
       <tr style='border-collapse:collapse;'> 
        <td align='center' style='padding:0;Margin:0;'> 
         <table class='es-header-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;'> 
          <tbody> 
           <tr style='border-collapse:collapse;'> 
            <td align='left' style='padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;'> 
             <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
              <tbody> 
               <tr style='border-collapse:collapse;'> 
                <td width='560' align='center' valign='top' style='padding:0;Margin:0;'> 
                 <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                  <tbody> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='center' style='padding:0;Margin:0;'>  </td> 
                   </tr> 
                  </tbody> 
                 </table> </td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> 
     <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
      <tbody> 
       <tr style='border-collapse:collapse;'> 
        <td align='center' style='padding:0;Margin:0;'> 
         <table bgcolor='#ffffff' class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
          <tbody> 
           <tr style='border-collapse:collapse;'> 
            <td align='left' style='padding:20px;Margin:0;'> 
             <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
              <tbody> 
               <tr style='border-collapse:collapse;'> 
                <td width='560' align='center' valign='top' style='padding:0;Margin:0;'> 
                 <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                  <tbody> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='left' style='padding:0;Margin:0;padding-bottom:20px;'> <a target='_blank' style='-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, "helvetica neue", helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#1376C8;'> <img class='adapt-img' src='https://ipo.msk.ru/image/catalog/logotip-ipo-top-mail.jpg' alt='' style='display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;' width='300'> </a> </td> 
                   </tr> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='left' style='padding:0;Margin:0;padding-bottom:15px;'><h2 style='Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:arial, "helvetica neue", helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#333333;'>Вам оставили следующую информацию:</h2></td> 
                   </tr> 
                  </tbody> 
                 </table> </td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> 
     <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
      <tbody> 
       <tr style='border-collapse:collapse;'> 
        <td align='center' style='padding:0;Margin:0;'> 
         <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
          <tbody> 
           <tr style='border-collapse:collapse;'> 
            <td align='left' style='padding:0;Margin:0;'> 
             <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
              <tbody> 
               <tr style='border-collapse:collapse;'> 
                <td width='600' align='center' valign='top' style='padding:0;Margin:0;'> 
                 <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                  <tbody> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='center' height='40' bgcolor='#f6f6f6' style='padding:0;Margin:0;'> </td> 
                   </tr> 
                  </tbody> 
                 </table> </td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> 
     <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
      <tbody> 
       <tr style='border-collapse:collapse;'> 
        <td align='center' style='padding:0;Margin:0;'> 
         <table bgcolor='#ffffff' class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
          <tbody> 
           <tr style='border-collapse:collapse;'> 
            <td align='left' style='padding:20px;Margin:0;'> 
             <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
              <tbody> 
               <tr style='border-collapse:collapse;'> 
                <td width='560' align='center' valign='top' style='padding:0;Margin:0;'> 
                 <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                  <tbody> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='left' style='padding:0;Margin:0;'>
              <p>Имя: ${name}</p>
        <p>E-mail: ${email}</p>
        <p>Телефон: ${phone}</p>
        <p><b>Комментарий:</b></p>
        <b><p>Дата и время заявки: ${date} в ${time}</p></b>
        <b><p>Город: ${cityRu}</p></b>
        <b><p>Страна: ${countryRu}</p></b>
          <b><p>Страница с которой отправлена заявка: https://psychology.ipo.msk.ru/</p></b>
          <b><p>UTM метка:</p></b>
          <b><p>Устройство:
          <b><p>UTM ссылка перехода:
          <b><p>Новая UTM ссылка перехода:</p></b>
          <b><p>Промокод:</p></b>
          <b><p>Заявка id: ${id}</p></b>
          <b><p>Вопрос:</p></b>
          <b><p>Способ связи:</p></b>
          <b><p>Личная страница ВК:</p></b>
          <b><p>Уч.план:</p></b>
          <b><p>Google Client ID:</p></b>
          <b><p>Yandex Metrics ID:</p></b>
          <b><p>utm_source: ${utmSource}</p></b>
          <b><p>utm_medium: ${utmMedium}</p></b>
          <b><p>utm_campaign: ${utmCampaign}</p></b>
          <b><p>utm_content: ${utmContent}</p></b>
          <b><p>utm_term: ${utmTerm}</p></b>
          <b><p>utm_worker: ${utmWorker}</p></b>
         </tr> 
                  </tbody> 
                 </table> </td>
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> 
     <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
      <tbody> 
       <tr style='border-collapse:collapse;'> 
        <td align='center' style='padding:0;Margin:0;'> 
         <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
          <tbody> 
           <tr style='border-collapse:collapse;'> 
            <td align='left' style='padding:0;Margin:0;'> 
             <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
              <tbody> 
               <tr style='border-collapse:collapse;'> 
                <td width='600' align='center' valign='top' style='padding:0;Margin:0;'> 
                 <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                  <tbody> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='center' height='15' style='padding:0;Margin:0;'> </td> 
                   </tr> 
                  </tbody> 
                 </table> </td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> 
     <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
      <tbody> 
       <tr style='border-collapse:collapse;'> 
        <td align='center' style='padding:0;Margin:0;'> 
         <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
          <tbody> 
           <tr style='border-collapse:collapse;'> 
            <td align='left' style='padding:0;Margin:0;'> 
             <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
              <tbody> 
               <tr style='border-collapse:collapse;'> 
                <td width='600' align='center' valign='top' style='padding:0;Margin:0;'> 
                 <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                  <tbody> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='center' style='padding:0;Margin:0;display:none;'></td> 
                   </tr> 
                  </tbody> 
                 </table> </td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> 
     <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
      <tbody> 
       <tr style='border-collapse:collapse;'> 
        <td align='center' style='padding:0;Margin:0;'> 
         <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;'> 
          <tbody> 
           <tr style='border-collapse:collapse;'> 
            <td align='left' style='padding:0;Margin:0;'> 
             <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
              <tbody> 
               <tr style='border-collapse:collapse;'> 
                <td width='600' align='center' valign='top' style='padding:0;Margin:0;'> 
                 <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                  <tbody> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='center' height='40' bgcolor='#f6f6f6' style='padding:0;Margin:0;'> </td> 
                   </tr> 
                  </tbody> 
                 </table> </td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> 
     <table cellpadding='0' cellspacing='0' class='es-footer' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;'> 
      <tbody> 
       <tr style='border-collapse:collapse;'> 
        <td align='center' style='padding:0;Margin:0;'> 
         <table class='es-footer-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;'> 
          <tbody> 
           <tr style='border-collapse:collapse;'> 
            <td align='left' bgcolor='#ffffff' style='Margin:0;padding-top:15px;padding-bottom:15px;padding-right:20px;padding-left:40px;background-color:#FFFFFF;'> 
             <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
              <tbody> 
               <tr style='border-collapse:collapse;'> 
                <td width='540' class='es-m-p0r' valign='top' align='center' style='padding:0;Margin:0;'> 
                 <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                  <tbody> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='center' style='padding:0;Margin:0;'><p style='Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, "helvetica neue", helvetica, sans-serif;line-height:150%;color:#333333;'>Институт профессионального образования<br>Лицензия на образовательную деятельность № 038092</p></td> 
                   </tr> 
                  </tbody> 
                 </table> </td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> 
     <table cellpadding='0' cellspacing='0' class='es-content' align='center' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;'> 
      <tbody> 
       <tr style='border-collapse:collapse;'> 
        <td align='center' style='padding:0;Margin:0;'> 
         <table class='es-content-body' align='center' cellpadding='0' cellspacing='0' width='600' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;'> 
          <tbody> 
           <tr style='border-collapse:collapse;'> 
            <td align='left' style='Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;'> 
             <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
              <tbody> 
               <tr style='border-collapse:collapse;'> 
                <td width='560' align='center' valign='top' style='padding:0;Margin:0;'> 
                 <table cellpadding='0' cellspacing='0' width='100%' style='mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;'> 
                  <tbody> 
                   <tr style='border-collapse:collapse;'> 
                    <td align='center' style='padding:0;Margin:0;display:none;'></td> 
                   </tr> 
                  </tbody> 
                 </table> </td> 
               </tr> 
              </tbody> 
             </table> </td> 
           </tr> 
          </tbody> 
         </table> </td> 
       </tr> 
      </tbody> 
     </table> </td> 
   </tr> 
  </tbody> 
  </table> 
  </div>  
  </body>
  </html>
  `
}

export default output
