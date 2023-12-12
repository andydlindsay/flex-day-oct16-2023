console.log('hello from script');

// $(document).ready(() => {});
$(() => {

  const createFoodItem = (foodItem) => {
    const $foodItemArticle = $(`
      <article class="food-item">
        <header>
          <h2>Name: ${foodItem.name}</h2>
          <h3>Id: ${foodItem.id}</h3>
        </header>
        <hr/>
        <p>Tagline: ${foodItem.tagline}</p>
        <footer>
          <p>Calories: ${foodItem.calories}</p>
          <p>Price: $${foodItem.price}</p>
        </footer>
      </article>
    `);

    return $foodItemArticle;
  };

  const $section = $('#food-item-container');

  const renderFoodItems = (foodItems) => {
    // empty the container
    $section.empty();

    for (const foodItem of foodItems) {
      const $foodItemArticle = createFoodItem(foodItem);
      $section.prepend($foodItemArticle);
    }
  };

  const loadFoodItems = () => {
    $.ajax({
      method: 'GET',
      url: '/api/food-items',
      success: (foodItems) => {
        console.log(foodItems);
        renderFoodItems(foodItems);
      }
    });
  };

  loadFoodItems();

  // grab the form
  const $form = $('#new-food-item');

  // listen for the submit event
  $form.on('submit', (event) => {
    // prevent the default behaviour
    event.preventDefault();
    
    console.log('the form has submitted!');

    // grab the data from the form
    const formData = $form.serialize();

    console.log(formData);

    // send the POST request
    $.ajax({
      method: 'POST',
      url: '/api/food-items',
      data: formData,
      success: () => {
        // clear the input field
        // $('#name-field').val('');
        $form[0].reset();

        console.log('post request resolved successfully');

        // make a GET request to retrieve all food items
        loadFoodItems();
      }
    });
  });
});
