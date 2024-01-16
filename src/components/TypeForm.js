import React from "react";

export default React.createClass({
  displayName: "TypeFomr",

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
  },

  componentWillUnmount() {
    const script = document.querySelector(
      'script[src="//embed.typeform.com/next/embed.js"]'
    );
    if (script) {
      document.body.removeChild(script);
    }
  },

  render() {
    return (
      <div
        data-tf-live="01HM9E57CBSHJ126QNVTK7MGSB"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Code Blend Form"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        style={{ width: "100%", height: "500px" }}
      ></div>
    );
  },
});
