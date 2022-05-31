import React from "react";
import '../index.css';
import { AppContainer } from "../AppContainer";
import { Display } from "../Display";
import { DisplayContainer } from "../DisplayContainer";
import { Filter } from "../Filter";
import { Person } from "../Person";
import { PersonContainer } from "../PersonContainer";

function App() {
  const [timeframe, setTimeframe] = React.useState("weekly");
  const data = require("../data.json");

  return (
    <AppContainer>
      <PersonContainer>
        <Person 
          image="bg-jeremy-robson"
          name="Jeremy Robson"
        />
        <Filter 
          setTimeframe={setTimeframe}
        />
      </PersonContainer>
      
      <DisplayContainer
        backgroundColor="bg-work"
        backgroundIcon="bg-icon-work"
      >
        <Display 
          index="0"
          data={data}
          timeframe={timeframe}
        />
      </DisplayContainer>
      
      <DisplayContainer
        backgroundColor="bg-play"
        backgroundIcon="bg-icon-play"
      >
        <Display 
          index="1"
          data={data}
          timeframe={timeframe}
        />
      </DisplayContainer>
      
      <DisplayContainer
        backgroundColor="bg-study"
        backgroundIcon="bg-icon-study"
      >
        <Display 
          index="2"
          data={data}
          timeframe={timeframe}
        />
      </DisplayContainer>

      <DisplayContainer
        backgroundColor="bg-exercise"
        backgroundIcon="bg-icon-exercise"
      >
        <Display 
          index="3"
          data={data}
          timeframe={timeframe}
        />
      </DisplayContainer>

      <DisplayContainer
        backgroundColor="bg-social"
        backgroundIcon="bg-icon-social"
      >
        <Display 
          index="4"
          data={data}
          timeframe={timeframe}
        />
      </DisplayContainer>

      <DisplayContainer
        backgroundColor="bg-self-care"
        backgroundIcon="bg-icon-self-care"
      >
        <Display 
          index="4"
          data={data}
          timeframe={timeframe}
        />
      </DisplayContainer>
    </AppContainer>
  );
    
}

export default App;
