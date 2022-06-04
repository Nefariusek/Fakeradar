@RestResource(urlMapping='/Report/*')
global with sharing class ReportREST {
    @HttpGet
    global static List<Report__c> getAllReports() {
        ReportController controller = new ReportController();
        return controller.getReports();
    }

  
    @HttpPost
    global static List<Report__c> postReport() {
        RestRequest req = RestContext.request;
        List<Report__c> reportsToAdd = (List<Report__c>) JSON.deserialize(req.requestBody.toString(), List<Report__c>.class);

        upsert reportsToAdd;

        ReportController controller = new ReportController();
        return controller.getReports();
    }
}