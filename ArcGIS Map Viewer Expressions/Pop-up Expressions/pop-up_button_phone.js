//Authored by me: https://www.esri.com/arcgis-blog/products/field-maps/field-mobility/design-email-and-phone-buttons-for-arcgis-field-maps/

var imgSizeCSS = `style="width: 16px; height: 16px"`;

var buttonsArray = [
  {
    buttonConfig: {
      iconURL: `<img ${imgSizeCSS} src="https://nitro.maps.arcgis.com/sharing/rest/content/items/5c7735e033e941ce8351514d35c7802e/data">`, //Using AGOL To Host PNG's
      buttonText: `Call <i>${$feature.phone}</i>`,
      buttonColor: `black`,
      hrefAction: `tel:${$feature.phone}`,
    },
  },
];

return {
  type: "text",
  text: `<div style="display:flex;gap:1rem;margin-left:auto;margin-right:auto;width:fit-content;"><div style="align-items:center;background-color:${buttonsArray[0].buttonConfig.buttonColor};border-radius:50px;border:1px solid ${buttonsArray[0].buttonConfig.buttonColor};color:white;display:flex;height:25px;padding:3px 10px;width:fit-content;"><div style="flex-grow:1;text-align:center;"><a href="${buttonsArray[0].buttonConfig.hrefAction}">${buttonsArray[0].buttonConfig.iconURL}</a></div><div style="flex-grow:3;margin-left:4px;text-align:center;"><a style="color:white;text-decoration:none;" href="${buttonsArray[0].buttonConfig.hrefAction}">${buttonsArray[0].buttonConfig.buttonText}</a></div></div></div>`,
};
