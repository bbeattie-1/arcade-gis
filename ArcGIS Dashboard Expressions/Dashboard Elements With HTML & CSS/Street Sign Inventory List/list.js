return {
    textColor: '',
    backgroundColor: '',
    separatorColor:'',
    selectionColor: '',
    selectionTextColor: '',
    attributes: {
      attribute1: IIf($datapoint.Quantity <= 2, "#B30118", "#000"),
      attribute2: Text($datapoint.Creation_Date, 'M/D/YY')
     }
  }