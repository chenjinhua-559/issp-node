var app = angular.module('taxInfoSummary', ['toastr']);
app.controller('taxInfoSummaryCtrl', function($scope,$state,toastr,taxInfoSer){
    //查询所有公司名
    taxInfoSer.listResultProject().then(function(response){
        if(response.data.code == 0){
            $scope.projectdata = response.data.data;
        }
    });
    $scope.collect = function(){
        var data = {
            project: $scope.project,
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        };
        taxInfoSer.summaryProject(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
//无参数传入
    taxInfoSer.summaryProject().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
});





