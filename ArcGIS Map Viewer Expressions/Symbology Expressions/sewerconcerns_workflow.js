if ($feature.needs_staff_review == "No" || $feature.needs_staff_review == null ) {
    return "Needs Intern Review"
  } else if ($feature.needs_staff_review == "Yes" && ($feature.Ready_To_Be_Cleared == "No" || $feature.Ready_To_Be_Cleared == null)) {
    return "Needs Staff Review"
  } else if ($feature.Ready_To_Be_Cleared == "Yes") {
    return "Cleared"
  } else {
    return "Error! ~ Contact Ben"
  }