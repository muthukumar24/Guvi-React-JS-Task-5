This Repository is created for submitting the allocated task from React JS Day - 8 session.

The given task is to Create a cart page using React JS. Application needs to increase or decrease the per unit quantity, which should automatically update the total Quantity and Amount.

Application Workflow:

1 - Landing Page (Home Page)

- Display Products: Upon landing on the application, the user is presented with a list of displayed products. Each product includes essential details like name, image, description, available stocks, price, and a "Buy Now" button.

2 - Buy Now Action

- User Clicks "Buy Now": When the user clicks the "Buy Now" button for a product, they are redirected to the Buy Now page, which serves as the Checkout page.

3 - Checkout Page

- Product Details: The Checkout page displays the details of the selected product, including its name, image, price, and quantity.
- Quantity Selection: The user can increase or decrease the quantity of the product. This can be done using a input plus and minus buttons.
- Payment Method: User can select mode of payment from drop down menu.
- Total Amount Calculation: As the user adjusts the quantity, the total amount is dynamically calculated and displayed. This calculation is typically done as:
Total Amount = Price × Quantity
- Display Total Amount: The calculated total amount is displayed on the page so the user can review the cost before proceeding.

=======

- NOTE: The images and thumbnails from the JSON data were not working, so I raised a query. After following the instructions from mentor, I downloaded and imported the images into the code.

Image Folder:

- /public/images

Attached application workflow screenshots under "Screenshots" folder for your reference

Please refer the following files for the source code.
- /src/App.jsx
- /src/LandingPage.jsx
- /src/BuyNow.jsx
- /src/App.css

JSON Data:
- /src/data.json

Thankyou and Awaiting Feedback.