export const regMessage = (
	name,
	email,
	phoneNumber,
	idNumber,
	dateOfBirth,
	businessName,
	businessType,
	businessAddress,
	businessCity,
	postalCode,
	bankName,
	accountType,
	accountNumber,
	accountName
) => {
	return `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Teneo - Registration Message</title>
          <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
              rel="stylesheet"
          />
          <style>
              * { 
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  font-family: "Inter", sans-serif;
              }
              .container {
                  padding: 20px;
                  width: 650px;
                  background: #f9f9f9;
                  border-radius: 8px;
              }
              .center-logo {
                  text-align: center;
                  margin-bottom: 20px;
                  font-size: 24px;
                  font-weight: bold;
                  color: black;
              }
                .logo {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    background-color: #04c264;
                    color: white;
                    font-size: 28px;
                    font-weight: bold;
                    border-radius: 50%;
                    margin-right: 10px;
                }
              .header-content p {
                  font-size: 25px;
                  color: rgb(29, 50, 98);
                  margin: 1em auto;
                  font-weight: bold;
                  text-align: center;
              }
              .design {
                  background-color: rgb(29, 50, 98);
                  width: 100%;
                  height: 4px;
                  position: relative;
              }
              .design::before {
                  content: "";
                  background-color: #ffc800;
                  width: 100%;
                  position: absolute;
                  height: 4px;
                  bottom: -4px;
              }
              .salutation {
                  margin: 20px 0;
                  font-size: 18px;
                  font-weight: bold;
              }
              .m-text {
                  margin-bottom: 25px;
                  font-size: 16px;
                  line-height: 1.6;
              }
              .section-title {
                  font-size: 18px;
                  font-weight: bold;
                  color: rgb(29, 50, 98);
                  margin-top: 20px;
                  border-bottom: 2px solid rgb(29, 50, 98);
                  padding-bottom: 5px;
              }
              .details {
                  margin-top: 10px;
                  padding-bottom: 15px;
              }
              .details p {
                  margin-bottom: 8px;
                  color: rgb(29, 50, 98);
                  font-weight: 600;
              }
              .details span {
                  font-size: 14px;
                  color: #333;
              }
              .footer {
                  margin-top: 20px;
                  font-size: 14px;
                  text-align: center;
              }
              .otp {
                  font-size: 18px;
                  font-weight: bold;
                  color: rgb(29, 50, 98);
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="center-logo">
                  <span class="logo">T</span> Teneo
              </div>
              <div class="header-content">
                  <p>Welcome to Teneo!</p>
              </div>
              <div class="design"></div>
              <div class="message">
                  <h4 class="salutation">Dear ${name},</h4>
                  <p class="m-text">
                      Congratulations! Your registration as an agent has been successfully received.
                      Below are your details:
                  </p>

                  <!-- Personal Information -->
                  <h4 class="section-title">Personal Information</h4>
                  <div class="details">
                      <p>Email: <span>${email}</span></p>
                      <p>Phone Number: <span>${phoneNumber}</span></p>
                      <p>ID Number: <span>${idNumber}</span></p>
                      <p>Date of Birth: <span>${dateOfBirth}</span></p>
                  </div>

                  <!-- Business Information -->
                  <h4 class="section-title">Business Information</h4>
                  <div class="details">
                      <p>Business Name: <span>${businessName}</span></p>
                      <p>Business Type: <span>${businessType}</span></p>
                      <p>Business Address: <span>${businessAddress}</span></p>
                      <p>City: <span>${businessCity}</span></p>
                      <p>Postal Code: <span>${postalCode}</span></p>
                  </div>

                  <!-- Bank Details -->
                  <h4 class="section-title">Bank Details</h4>
                  <div class="details">
                      <p>Bank Name: <span>${bankName}</span></p>
                      <p>Account Type: <span>${accountType}</span></p>
                      <p>Account Number: <span>${accountNumber}</span></p>
                      <p>Account Name: <span>${accountName}</span></p>
                  </div>

                 
              </div>
              <div class="footer">
                  <p>Thank you for joining Teneo.</p>
              </div>
          </div>
      </body>
  </html>`;
};
