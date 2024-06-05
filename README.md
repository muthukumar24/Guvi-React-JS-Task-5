This Repository is created for submitting the allocated task from React JS Day - 8 session.

The given task is to Create a cart page using React JS. Application needs to increase or decrease the per unit quantity, which should automatically update the total Quantity and Amount.

Application Workflow:

1 - Landing Page (Home Page)

- Display Products: Upon landing on the application, the user is presented with a list of displayed products. Each product includes essential details like name, image, description, available stocks, price, and a "Buy Now" button.

2 - Buy Now Action

- User Clicks "Buy Now": When the user clicks the "Buy Now" button for a product, they are redirected to the Buy Now page, which serves as the Checkout page.

3 - Add to Cart and Cart

- When the "Add to Cart" button is clicked for a specific product, that product is added to the user's cart. The cart count displayed in the navigation bar increments accordingly.
- The cart button on the LandingPage displays the count of items in the cart. Initially, the cart count is 0.
- When a user clicks the "Cart" button in Navigation bar, The user is navigated to the BuyNowPage.

4 - Checkout Page

- Product Details: The Checkout page displays the details of the selected product, including its name, image, price, and quantity.
- Quantity Selection: The user can increase or decrease the quantity of the product. This can be done using a input plus and minus buttons.
- Payment Method: User can select mode of payment from drop down menu.
- Total Amount Calculation: As the user adjusts the quantity, the total amount is dynamically calculated and displayed. This calculation is typically done as:
Total Amount = Price × Quantity
- Display Total Amount: The calculated total amount is displayed on the page so the user can review the cost before proceeding.

5 - Remove from Cart Button :

- When a user clicks the "Remove from Cart" button for a product, The product is removed from the cart.
- The list of products and the total amount are updated.


=======

- NOTE: The images and thumbnails from JSON data were not working, so I raised a query. After following the instructions from mentor, I downloaded and imported the images into the code.

Image Folder:

- /public/images

Attached application workflow screenshots under "Screenshots" folder for your reference

Please refer the following files for the source code.
- /src/App.jsx
- /src/LandingPage.jsx
- /src/BuyNow.jsx
- /src/USerContext.jsx
- /src/App.css

JSON Data:
- /src/data.json

Thankyou and Awaiting Feedback.