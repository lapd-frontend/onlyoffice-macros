(function()
{
    var activeSheet = Api.GetActiveSheet();
    var usedRange = activeSheet.GetUsedRange();
    // Quote Every Cell.
    usedRange.ForEach(function(cell){
        var value = cell.GetValue();
        var newValue = '"' + value + '"';
        cell.SetValue(newValue);
    });
})();
