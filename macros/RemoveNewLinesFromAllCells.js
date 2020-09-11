(function()
{
    var activeSheet = Api.GetActiveSheet();
    var usedRange = activeSheet.GetUsedRange();
    // Remove New Lines from all used Cells
    usedRange.ForEach(function(cell){
        var value = cell.GetValue();
        var newValue = value.split("\n").join(" ");
        cell.SetValue(newValue);
    });
})();
