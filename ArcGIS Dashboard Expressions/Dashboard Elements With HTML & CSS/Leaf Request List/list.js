//Code By Ben Beattie (Lower Paxton Township Public Works Intern 2023-24)

function statusColoration (value) {
    if (value == 'Incomplete') {
      return {
        iconColor: '#ff0062',
        textColor: '#fc72a7'
      }
    }
    else if (value == 'Complete') {
      return {
        iconColor: '#00ff62',
        textColor: '#72fca7'
      }
    }
  }
  
  return {
    textColor: '',
    backgroundColor: '',
    separatorColor:'',
    selectionColor: '',
    selectionTextColor: '',
     attributes: {
       attribute1: IIf(($datapoint.first_name == null || $datapoint.last_name== null ), "Anonymous Resident", $datapoint.first_name + " "+ $datapoint.last_name), //Name
       attribute2: statusColoration($datapoint.status).iconColor,
       attribute3: statusColoration($datapoint.status).textColor,
       attribute5: IIF($datapoint.CompletionTimestamp == null, 'None', Text($datapoint.CompletionTimestamp, 'MM/DD/YYYY, hh:mm a')),//Completion Date Formatting
       attribute6: IIF($datapoint.ResidentWait == null, 'None', Text($datapoint.ResidentWait/24) + ' days'), 
       attribute7: IIF($datapoint.email == null, 'No Email', $datapoint.email), //Contact
       attribute8: IIF($datapoint.comment_box == null, 'None', $datapoint.comment_box), //Comments
       attribute9: IIF($datapoint.phone_number == null, 'No Phone Number Provided', $datapoint.phone_number),
     }
  }