import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Do ya like shoes?</h2>
              <p>We got a lot of shoes for ya.</p>
              <form className="form-section">
                <input placeholder="Email us..." name="email" type="email" />
                <input value="Written Text" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
