# Consuming API from Frontend React Application

by Alex Merced

**TAKE AWAY**: Consuming your API from a frontend application and the deploying both the backend (Heroku) and frontend applications (Netlify).

## Step 1 - Setup

- CLONE: ```git clone https://git.generalassemb.ly/AlexMerced/EXPRESSREACT.git expressreactbuild```
- Change Directories: ```cd expressreactbuild```
- REMOVE THE EXISTING GIT REPO WITH THE FOLLOWING COMMAND
  - `sudo rm -r .git` for Mac or Linux
  - `rm -r .git` using Git Bash on Windows
  
 **DOUBLE CHECK** Show all files in the ```expressreactbuild``` folder with the command ```ls -la``` and make sure you don't see a ```.git```. If you don't see it, then then you have succesfully removed the git repo.

#### Backend Setup

1. CD into the backend folder
2. Run the command `npm install`
3. Rename the template.env to .env
4. Run the server with the command `npm run dev`
5. open localhost:4500 hundred in browser, if you see JSON hello world, it's working
6. kill the server with ctrl+c
7. Create a new Git Repository in the backend folder with `git init` then add all and commit

#### Frontend Setup

1. cd into the frontend folder
2. run `npm install`
3. run `npm start`
4. If you see the Dog List Home Screen, it's working
5. Make a new repo in the backend folder with command `git init` the add all and commit

## Step 2 - Test the backend

Before we start building the frontend we should always test that all our endpoints work as expected. We want to make sure our backend is 100% so we know any errors going forward must be isolated to the backend.

- open up post man
- run your server `npm run dev`

#### Index Route

- get request to /dog/
- should return array of all existing dogs

#### Create Route

- post request to /dog/
- add a json body with the following properties, name:string, age:number, img:string
- should return newly created dog

#### Update Route

- put request to /dog/:id (id should be the dogs mongo id)
- include a json body with changes
- should return updated version of dog

#### Delete Route

- delete request to /dog/:id
- should return the deleted dog

**MAKE SURE THAT BEFORE YOUR DONE TESTING YOU HAVE AT LEAST 3 DOGS IN YOUR DATABASE**

## Step 3 - Displaying The Dogs

**MISSION** Make the API call of the list of dogs, send the list down to the display component who will render the list of dogs.

#### Making the API Call

**Here we will do three things**

- Create a variable for the API url for easy reuse
- Create state to hold the list of dogs
- Create a function to get the list of dogs and update the state
- call that function from within a useEffect call

app.js
```js
// URL VARIABLE
const url = "http://localhost:4500";
// LIST OF DOGS STATE
const [dogs, setDogs] = React.useState([]);
// GET LIST OF DOGS FUNCTION
const getDogs = () => {
  fetch(url + "/dog/")
    .then((response) => response.json())
    .then((data) => {
      setDogs(data);
    });
};
//useEffect to do initial fetch of dogs
React.useEffect(() => getDogs(), []);
```

**Make Sure to Check the React DevTools to ensure that the information is in your state**

#### Passing the dogs down to display

So now that we have the data in our state we need to send it down to display via props.

app.js
```js
        <Switch>
          <Route exact path="/"
            render={(rp) => <Display {...rp} />}
            dogs={dogs} />
```

#### Showing the dogs on display

So now dogs should be passed down as display. Of course it's always a good habit to prepare for property accessing errors so we are going to save the possible views in two variables and use a ternary operator to determine which one shows.

display.js
```js
import React from "react";

const Display = (props) => {
  const { dogs } = props;

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {dogs.map((dog) => (
        <article>
          <img src={dog.img} />
          <h1>{dog.name}</h1>
          <h3>{dog.age}</h3>
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>;

  //display loaded if there are dogs, show loading if there isn't
  return dogs.length > 0 ? loaded() : loading;
};

export default Display;
```

## Step 4 - Creating Dogs

Instead of creating two forms for edit and create, we'll use one form and pass in the right props for the particular use. The main props we are sending to our form component are...

- handleSubmit: The function the form should be run when the submit button is hit, the for Form component will run the function and pass the form data to it.

- dog: This will be the initial data pre-populated on the form. We will create an empty dog to pass for a blank create form.

- label: What the submit button will say

#### Creating our function and emptyDog

Before we create a link to the create form let's pass the form the props it needs so let's create a handleCreate function which will be passed as the forms handleSubmit prop and for dog we'll pass the emptyDog variable which is just an empty dog object.

app.js
```js
// URL VARIABLE
const url = "http://localhost:4500";

// LIST OF DOGS STATE
const [dogs, setDogs] = React.useState([]);

//EMPTY DOG
const emptyDog = {
  name: "",
  age: 0,
  img: "",
};

// GET LIST OF DOGS FUNCTION
const getDogs = () => {
  fetch(url + "/dog/")
    .then((response) => response.json())
    .then((data) => {
      setDogs(data);
    });
};

//useEffect to do initial fetch of dogs
React.useEffect(() => getDogs(), []);

//handleCreate function for creating new dogs
const handleCreate = (newDog) => {
  fetch(url + "/dog/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDog),
  }).then(() => {
    // don't need the response from the post but will be using the .then to update the list of dogs
    getDogs();
  });
};
```

#### Passing the Data to the Form

app.js
```js
<Route
  exact
  path="/create"
  render={(rp) => (
    <Form {...rp} label="create" dog={emptyDog} handleSubmit={handleCreate} />
  )}
/>
```

#### Adding a Create Button

Above the Switch add the Following Button

app.js
```js
<Link to="/create">
  <button>Add Dog</button>
</Link>
```

**NOW THE FORM SHOULD BE WORKING, TAKE A MOMENT TO EXPLORE THE FORM COMPONENT TO SEE WHAT IT IS DOING WITH THOSE PROPS WE PASSED**

## Step 4 - Adding a Update Button

This will probably be the trickiest part of assembling CRUD. First let's assemble the same props we passed in for Create so the form component will be ready once we have links to it.

- create a handleUpdate function that will make the put request, and get the latest set of dogs

- create selectedDog state so that way when a user selects a dog that particular dog will be passed to form

- create a selectDog function, we will pass this down to display so when you select a dog this function will set the selectedDog state to that particular dog.

```js
// URL VARIABLE
const url = "http://localhost:4500";

// LIST OF DOGS STATE
const [dogs, setDogs] = React.useState([]);

//EMPTY DOG
const emptyDog = {
  name: "",
  age: 0,
  img: "",
};

//SELECTED DOG STATE
const [selectedDog, setSelectedDog] = React.useState(emptyDog);

// GET LIST OF DOGS FUNCTION
const getDogs = () => {
  fetch(url + "/dog/")
    .then((response) => response.json())
    .then((data) => {
      setDogs(data);
    });
};

//useEffect to do initial fetch of dogs
React.useEffect(() => getDogs(), []);

//handleCreate function for creating new dogs
const handleCreate = (newDog) => {
  fetch(url + "/dog/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDog),
  }).then(() => {
    // don't need the response from the post but will be using the .then to update the list of dogs
    getDogs();
  });
};

//handleUpdate function for updating dogs
const handleUpdate = (dog) => {
  fetch(url + "/dog/" + dog._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog),
  }).then(() => {
    // don't need the response from the post but will be using the .then to update the list of dogs
    getDogs();
  });
};

const selectDog = (dog) => {
  setSelectedDog(dog);
};
```

Let's pass down the props to our routes!

```js
<Switch>
  <Route
    exact
    path="/"
    render={(rp) => <Display {...rp} />}
    dogs={dogs}
    selectDog={selectDog}
  />
  <Route
    exact
    path="/create"
    render={(rp) => (
      <Form {...rp} label="create" dog={emptyDog} handleSubmit={handleCreate} />
    )}
  />
  <Route
    exact
    path="/edit"
    render={(rp) => (
      <Form
        {...rp}
        label="update"
        dog={selectedDog}
        handleSubmit={handleUpdate}
      />
    )}
  />
</Switch>
```

#### Adding an Edit Button

So in Display we will add an edit button with an onClick function. The function will be an inline function that way we have access to the individual dog as a variable (Each dog is in scope on each loop of map).

```js
import React from "react";

const Display = (props) => {
  const { dogs } = props;

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {dogs.map((dog) => (
        <article>
          <img src={dog.img} />
          <h1>{dog.name}</h1>
          <h3>{dog.age}</h3>
          <button
            onClick={() => {
              props.selectDog(dog);
              props.history.push("/edit");
            }}
          >
            Edit
          </button>
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>;

  //display loaded if there are dogs, show loading if there isn't
  return dogs.length > 0 ? loaded() : loading;
};

export default Display;
```

## Step 5 - Add the Delete Button

The Delete Button will be similar in that we need deliver a function down to display and create another button like edit that uses the function, but that's it so a little simpler this time.

**App.js**

```js
// URL VARIABLE
const url = "http://localhost:4500";

// LIST OF DOGS STATE
const [dogs, setDogs] = React.useState([]);

//EMPTY DOG
const emptyDog = {
  name: "",
  age: 0,
  img: "",
};

//SELECTED DOG STATE
const [selectedDog, setSelectedDog] = React.useState(emptyDog);

// GET LIST OF DOGS FUNCTION
const getDogs = () => {
  fetch(url + "/dog/")
    .then((response) => response.json())
    .then((data) => {
      setDogs(data);
    });
};

//useEffect to do initial fetch of dogs
React.useEffect(() => getDogs(), []);

//handleCreate function for creating new dogs
const handleCreate = (newDog) => {
  fetch(url + "/dog/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newDog),
  }).then(() => {
    // don't need the response from the post but will be using the .then to update the list of dogs
    getDogs();
  });
};

//handleUpdate function for updating dogs
const handleUpdate = (dog) => {
  fetch(url + "/dog/" + dog._id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dog),
  }).then(() => {
    // don't need the response from the post but will be using the .then to update the list of dogs
    getDogs();
  });
};

const selectDog = (dog) => {
  setSelectedDog(dog);
};

const deleteDog = (dog) => {
  fetch(url + "/dog/" + dog._id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    // don't need the response from the post but will be using the .then to update the list of dogs
    getDogs();
  });
};
```

#### Pass the Function down

```js
<Switch>
  <Route
    exact
    path="/"
    render={(rp) => <Display {...rp} />}
    dogs={dogs}
    selectDog={selectDog}
    deleteDog={deleteDog}
  />
  <Route
    exact
    path="/create"
    render={(rp) => (
      <Form {...rp} label="create" dog={emptyDog} handleSubmit={handleCreate} />
    )}
  />
  <Route
    exact
    path="/edit"
    render={(rp) => (
      <Form
        {...rp}
        label="update"
        dog={selectedDog}
        handleSubmit={handleUpdate}
      />
    )}
  />
</Switch>
```

#### Add the Delete button

```js
import React from "react";

const Display = (props) => {
  const { dogs } = props;

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {dogs.map((dog) => (
        <article>
          <img src={dog.img} />
          <h1>{dog.name}</h1>
          <h3>{dog.age}</h3>
          <button
            onClick={() => {
              props.selectDog(dog);
              props.history.push("/edit");
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              props.deleteDog(dog);
            }}
          >
            Delete
          </button>
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>;

  //display loaded if there are dogs, show loading if there isn't
  return dogs.length > 0 ? loaded() : loading;
};

export default Display;
```

**You Now Should have Full CRUD!!!**


