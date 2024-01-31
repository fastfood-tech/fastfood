<h1> Fastfood </h1>
<p> A user-friendly system for processing orders in a fast-food restaurant. It streamlines the ordering process, provide quick access to popular items, and facilitate easy tracking of orders. By implementing these features, the restaurant aims to enhance its service and improve overall customer satisfaction.</p>

Key Features:

- The user can view a small amount of products on the screen for quick selection.
- The user has the option to enter the name or code of the product to find it quickly.
- The user can select/remove items and track the order summary.
- The user can view the total amount and the change due.
- The user can enter the customer's name for delivery purposes.
- Upon completing the order, a receipt will be printed for the customer using a thermal printer.
  - Obs: Using HTTP instead of HTTPS may prevent the browser from prompting the user to select the printer serial port. To utilize this feature, please ensure that you have an HTTPS connection or that you are running this application on a local machine. application on local machine. 
- The order details will be displayed in the kitchen, along with the customer's name.
- The kitchen staff can mark orders as completed.

The goal of this project is to create a user-friendly and efficient system for processing orders in a fast-food restaurant. It should streamline the ordering process, provide quick access to popular items, and facilitate easy tracking of orders. By implementing these features, the restaurant aims to enhance its service and improve overall customer satisfaction.


<h2>Required Technologies</h2>

- Git 
- NodeJs
- Npm

<h2>How to Run</h2>

1 - Clone the repository:
```bash
git clone https://github.com/fastfood-tech/fastfood
```
2 - Navigate to the project folder:
```bash
cd fastfood
```
3 - In your project, create a file named .env in the root directory.

4 - Open the .env file and add the following line:
```bash
REACT_APP_BASE_API_URL=<base_api_url>
```
- Replace <base_api_url> with the actual base URL of your API. (if running <a href="https://github.com/fastfood-tech/fastfood-api">backend</a> as suggested, it is "http://localhost/api")

5 - Save the .env file.

6 - Install dependencies:
```bash
npm i
```
7 - [optional]: Run tests
```bash
npm run test
```
8 - Build app:
```bash
npm run build
```
9 - Start app
```bash
npm run start
```
10 - Access the application at http://localhost:3000
