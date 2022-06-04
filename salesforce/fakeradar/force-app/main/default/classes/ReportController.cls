public with sharing class ReportController {
    public ReportController() {

    }

    public List<Report__c> getReports() {
        return [SELECT Id, Name, Link__c, Sender__c, Source__c FROM Report__c];
    }
}
