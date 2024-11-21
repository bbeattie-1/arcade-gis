//Road Painting Table Arcade Code

var paint=round($datapoint.sum_Shape__Length * 3.28084,0)
var paintv2= text(paint, '#,###')

//Daily Distance Variables
var white4= $datapoint.White4
var yellow4= $datapoint.Yellow4
var white6= $datapoint.White6

//Daily Cost Variables * Sub-Contractors Rate
var white4cost= white4 * 0.09
var white6cost= white6 * 0.11
var yellow4cost= yellow4 * 0.175

//Completion Rate Based Upon Contractor Estimates
var yellow4_dist_estimate = 300480
var white4_dist_estimate = 362710
var white6_dist_estimate = 13910
var total_dist_estimate = yellow4_dist_estimate + white4_dist_estimate + white6_dist_estimate
var total_dist_actual= white4 + white6 +yellow4
var progressrate= round(total_dist_actual / total_dist_estimate * 100,2)

//Percent Error Calculation
var truckpath_fieldmaps=$datapoint.distance_LPT
var errorpercent= round(Abs((1-(total_dist_actual/truckpath_fieldmaps))) * 100,2)

return {
  cells: {
    DD: {
      displayText : text($datapoint.DD,'MMMM')+ " " + text($datapoint.DD,'DD') + "," + " " +text($datapoint.DD,'Y') ,
      textColor: '#FF0000',
      backgroundColor: '#000000',
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },
    
    D: {
      displayText : text($datapoint.DD,'dddd'),
      textColor: '#00FF0F',
      backgroundColor: '#000000',
      textAlign: 'center',
      iconName: '',
      iconAlign: 'center',
      iconColor: '',
      iconOutlineColor: ''
    },
    
    White4: {
      displayText : `<span style=font-weight:bold;>${text($datapoint.White4,'#,###')+ " ft"}</span>`,
      textColor: '#FFFFFF',
      backgroundColor: '#000000',
      textAlign: 'left',
      iconName: 'solid',
      iconAlign: '',
      iconColor: '#FFFFFF',
      iconOutlineColor: ''
    },
    
    Yellow4: {
      displayText : `<span style=font-weight:bold;>${text($datapoint.Yellow4,'#,###')+ " ft"}</span>`,
      textColor: '#FFD700',
      backgroundColor: '#000000',
      textAlign: 'left',
      iconName: 'dashed',
      iconAlign: '',
      iconColor: '#FFD700',
      iconOutlineColor: ''
    },
    
    White6: {
      displayText : `<span style=font-weight:bold;>${text($datapoint.White6, '#,###') + " ft"}</span>`,
      textColor: '#FFFFFF',
      backgroundColor: '#000000',
      textAlign: 'left',
      iconName: 'solid',
      iconAlign: '',
      iconColor: '#FFFFFF',
      iconOutlineColor: ''
    },

    paint_daily: {
      displayText : `<span style=font-weight:bold;>${"Σ " +text(white4 + white6 +yellow4,'#,###') + " ft"}</span>`,
      textColor: '#54CEFF',
      backgroundColor: '#000000',
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },
    paint_costdaily: {
      displayText : `<span style=font-weight:bold;>${"$ " +text(white4cost + white6cost +yellow4cost,'#,###')}</span>`,
      textColor: '#54CEFF',
      backgroundColor: '#000000',
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },
    percent_done_float: {
      displayText : `<span style=font-weight:bold;>${progressrate + " %"}</span>`,
      textColor: '#FF00E8',
      backgroundColor: '#000000',
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },
    error: {
      displayText : `<span style=font-weight:bold;>
      ${
        IIF(errorpercent < 5, "-" + errorpercent + " %",
        IIF(errorpercent == 5, errorpercent,
        IIF(errorpercent > 5, "+" + errorpercent + " %", "")))}</span>`,
      textColor: IIf(errorpercent < 5, '#3AFF00', IIf(errorpercent > 5, '#FF0000', '#FFFFFF' )),
      backgroundColor: '#000000',
      textAlign: 'center',
      iconName: '',
      iconAlign: '',
      iconColor: '',
      iconOutlineColor: ''
    },
  }
