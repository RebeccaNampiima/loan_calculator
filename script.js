function updateConnectedElement(source)
{
    var sourceValue = document.getElementById(source).value;
    var destination;

    switch (source)
    {
        case "amountSlider":
            destination = "amountBox";
            break;
        case "amountBox":
            destination = "amountSlider";
            break;
        case "yearsSlider":
            destination = "yearsBox";
            break;
        case "yearsBox":
            destination = "yearsSlider";
            break;
        default:
            alert("Error: Unknown element '" + source + "'!");
    }

    // Set the destination value to the source value
    document.getElementById(destination).value = sourceValue;

    // Compute costs after any update on the above elements
    callCompute();
}

function computeLoan(amount, yearsRemaining, totalCost = 0, totalAmortering = 0)
{
    var amortering = amount / yearsRemaining;
    var rate = document.getElementById("rateBox").value;
    var interest = amount * rate / 100;

    totalCost = totalCost + amortering + interest;
    totalAmortering = totalAmortering + amortering;

    yearsRemaining = yearsRemaining - 1;

    if (yearsRemaining > 0)
    {
        amount = amount - amortering;
        computeLoan(amount, yearsRemaining, totalCost);
    }
    else
    {
        let yearsTotal = document.getElementById("yearsBox").value;
        document.getElementById("costPerMonBox").value = Math.round(totalCost/ yearsTotal / 12);
        document.getElementById("totalCostBox").value = Math.round(totalCost);

        let amorteringPercent = (totalAmortering / totalCost) * 100;
        document.getElementsByTagName("td")[0].style.width = amorteringPercent+"%";
        document.getElementsByTagName("td")[0].style.backgroundColor = "orange";
    }
}

function callCompute()
{
    // Get current values and compute costs
    var amount = document.getElementById("amountBox").value;
    var years = document.getElementById("yearsBox").value;
    computeLoan(amount, years);
}

// Compute the default values
window.onload = callCompute;