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

Rendering the page after the api call:
we will use loader for that
URL params loader in react router
we will create a function for api call using async await
we will use try catch for handling
we will return the product for using it elsewhere
so here when the route is hit; we want the functiontion to be triggered which calls the api
and after that we want the element component to be rendered
so inorder for that we give function in loader key
the function is exported to be accessed in route
useLoader data is used to get the data retured to the loader in the component

Inside the loader the id will be passed from the route
it will be accessed as params in loader
params id will be used as temeperate literals for the api call
same name used or reserved in the route for dynamic id ahould be used for the api call in the loader
Any name can be resereved in the route for passing the id from the productcard; 

without the loader function:
useeffect will work inside the productDeatail component
id for the useEffect will come in the URL
id will reach the browser through the route dynamic id name as params
it will be obtained through the Useparams
and the id will be otained and it will be placed as template literals for api call
then we will keep it to the state 
and render it in the component

















