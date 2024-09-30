var iconSizeCSS = `style="width: 16px; height: 16px"`;

var buttonsArray = [
  {
    buttonConfig: {
      iconURL: `<img ${iconSizeCSS} src="https://nitro.maps.arcgis.com/sharing/rest/content/items/834abf729609466186a352e1afdf0db6/data">`, //Using AGOL To Host PNG's
      buttonText: `Email <i>${$feature.email}</i>`,
      buttonColor: `red`,
      hrefAction: `mailto:${$feature.email}?subject=${UrlEncode(
        `Inspection Status: Fire Hydrant ${$feature.OBJECTID}`
      )}&body=${UrlEncode(`Inspection Completed!`)}`,
    },
  },
];

return {
  type: "text",
  text: `<div style="display:flex;gap:1rem;margin-left:auto;margin-right:auto;width:fit-content;"><div style="align-items:center;background-color:${buttonsArray[0].buttonConfig.buttonColor};border-radius:50px;border:1px solid ${buttonsArray[0].buttonConfig.buttonColor};color:white;display:flex;height:25px;padding:3px 10px;width:fit-content;"><div style="flex-grow:1;text-align:center;"><a href="${buttonsArray[0].buttonConfig.hrefAction}">${buttonsArray[0].buttonConfig.iconURL}</a></div><div style="flex-grow:3;margin-left:4px;text-align:center;"><a style="color:white;text-decoration:none;" href="${buttonsArray[0].buttonConfig.hrefAction}">${buttonsArray[0].buttonConfig.buttonText}</a></div></div></div>`,
};
