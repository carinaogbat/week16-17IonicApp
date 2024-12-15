import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  // dataset state variable to hold JSON data from WP
  // to meet Ionic's requirement for typescript data types
  // set type to <any[]> on next line
  const [dataset, setDataset] = useState<any[]>([]);
  // URL for WP JSON REST endpoint
  const owner = "https://dev-cs5033-carinaogbat.pantheonsite.io/wp-json/twentytwentyone-child/v1/owners";
  // useEffect() to get JSON data and populate dataset state variable
  useEffect(() => {
    fetch(owner) // fetch() to load raw json string
    .then(response => response.json()) // json() to convert raw string to json object
    .then(data => setDataset(data)); // react state set function to populate data state var

  },[])

  console.log(dataset);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Owners</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Owners</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* use map() to loop through JSON array returned from WP */}
        <IonList id="owner-list">
          <IonListHeader>Owners</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              {/* <IonLabel> */}
                {/* <h6>{item.owner_first_name} {item.owner_last_name}: </h6> */}
   
                <p>{item.owner_first_name} {item.owner_last_name}: {item.owner_first_name} is the owner of: {item.owner_cats}. {item.owner_first_name} can be contacted at: {item.owner_email}</p>

              {/* </IonLabel> */}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};


export default Tab3;
