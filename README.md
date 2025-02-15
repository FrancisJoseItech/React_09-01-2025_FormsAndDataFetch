# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast R

Productcard component is created
Productcard component is called inside the Homepage

Dependencies can be seen inside the Package json
useefect is used to list product in Homepage; through API
Axios is installed for API
Axios should be installed within the folder
npm install axios
import axios in the homepage
http method is get here

Make sure to check on the <a> tag as we use link to

useState will be defined and the data will be kept to state; there will be an empty array in the usestate
using js {} maping of the product is carried out in the homepage; which will display all the cards

props will be used to pass the details of the product to productcard using {item}
This will be accesed inside the Productcard as props.item or {item} inside the productcard
formating the card

Give unique key for the product

Will use conditional rendering for Svg loading
loading is made as a component
html is converted to jsx using extension
when the product state exist we will render the productcard
?: else we will call the svg in the loading component
product.length? which means if there is value in product state

svg can be formatted

when viewproduct is clicked we want it to be navigating to product details
create a new route for productdetails for dynamic navigation
create the productdetail component
inside the productcard component Link to Productdetails route is defined
id will be passed to the productdetails route using template literals
productdetais route will also be made dynamic /:id
useparams in the react router dom will be use to select the id which come in the browser as params
useParams is defined inside the productdetail component to select the id passed  from the route
axioxs will be imported in productdetail
api hit will be done through useEffect hook for single product with the id obtained through useParams
obtained product with the id will be saved to a State














