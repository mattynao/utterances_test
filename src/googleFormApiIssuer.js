function onFormSubmit(e) {
  // FormApp.getActiveForm()
  console.log(e.namedValues);
  keys = Object.keys(e.namedValues).sort() ;
  qa_list = keys.map( key => "### " + key + "\n" + e.namedValues[key] + "\n") ;

  const mail = e.namedValues["メールアドレス"][0] ;
  const question = e.namedValues["質問"][0] ;
  const path = e.namedValues["対象ファイル"][0]

  // delete submitted datas
  form = FormApp.openById("1WBrEPHMKfbBCTElhcvqn-tAUiYaS6_CmuDZPc1NIWck");
  form.deleteAllResponses();
  sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  row_cnt = sheet.getLastRow() - 1 ;
  sheet.deleteRows(2, row_cnt) ;

  // github authorization
  // secrets stored in GAS properties
  const githubAccessToken = PropertiesService.getScriptProperties().getProperty("githubAccessToken");
  const githubApiUrl = PropertiesService.getScriptProperties().getProperty("githubApiUrl");
  const adminMail = PropertiesService.getScriptProperties().getProperty("adminMail");

  // construct body for Issue
  const body = `### 対象ファイル\n${path}\n` + `## 質問内容\n${question}`

  options = {
    "method": "post",
    "headers" : {
      "Content-type": "application/json",
      "Authorization": "token " + githubAccessToken,
      "Accept": "application/vnd.github.v3+json"
    },
    "payload" : JSON.stringify({
      "title": path,
      "body": body
    })
  }

  var response = UrlFetchApp.fetch(githubApiUrl, options)

  //console.log("API response\n", response)

  if (response.getResponseCode() == 201) {
    var json = JSON.parse(response.getContentText());
    issueUrl = json.html_url;
    urlToUser = "質問が投稿されました!\n下記のURLをご確認ください\n" + issueUrl
    MailApp.sendEmail(adminMail, "New Issue Posted!", issueUrl);
    MailApp.sendEmail(mail, "ご質問ありがとうございます", urlToUser);
  }
}
