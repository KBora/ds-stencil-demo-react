import './App.css';
import Card from './Card';

function App() {
  const tags = ["fluffy", "rex", "spot", "dingding"];

  function handleTagClick($event) {
    console.log('handleTagClick in App.js: ', $event)
  }

  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ds-card
            card-image-url="https://source.unsplash.com/oul9SXW4pHk/384x234"
            card-image-alt="Ladakh mountains"
            card-title="What will the future hold?"
            card-text="If you obsess over whether you are making the right decision, you are basically assuming that the universe will reward you for one thing and punish you for another.">        
          </ds-card>

          <Card
            cardImageUrl="https://source.unsplash.com/sFku2lE3isw/384x234"
            cardImageAlt="Baby goats"
            cardTitle="Goats are cute"
            cardText="Compassion for animals is intimately associated with goodness of character, and it may be confidently asserted that he who is cruel to animals cannot be a good man."
            cardTags={tags}
            tagClick={handleTagClick}>
          </Card>

          <Card
            cardImageUrl="https://source.unsplash.com/random/384x234"
            cardImageAlt="Random image"
            cardTitle="Another random image title"
            cardText="This coffee falls into your stomach, and straightway there is a general commotion. Ideas begin to move like the battalions of the Grand Army on the battlefield."
            cardTags={["coffee", "balzac"]}
            tagClick={handleTagClick}>
          </Card>
        </div>
      </div>
     

    </div>
  );
}

export default App;
