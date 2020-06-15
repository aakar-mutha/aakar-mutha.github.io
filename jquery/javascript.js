function checkAddress(checkbox)
{
    if (checkbox.checked)
    {
      $(".showcase").hide();
      $(".experience").hide();
      $(".education").hide();
      $(".skills").hide();
      $(".interests").hide();
      $(".awards").hide();

    }
    else
    {
      $(".showcase").show();
      $(".experience").show();
      $(".education").show();
      $(".skills").show();
      $(".interests").show();
      $(".awards").show();
    }
}   