import React from 'react'
import "./well.css"

const well = () => {
  return (
    <div>
      <h2>Sample Table</h2>
      <table>
        <thead>
          <tr>
            <th>Animal</th>
            <th>Care Guidelines</th>
            <th>Healthcare Considerations</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dogs</td>
            <td>- Provide a balanced diet based on their size, age, and breed. - Ensure fresh water is always available. - Regular exercise and playtime. - Regular grooming (brushing, bathing, and nail trimming). - Routine vaccinations and parasite control. - Regular vet check-ups.</td>
            <td>- Keep an eye out for signs of illness (lethargy, vomiting, diarrhea). - Maintain dental health. - Spay/neuter if not breeding. - Monitor for joint issues in certain breeds. - Prevent heartworm and tick-borne diseases.</td>
          </tr>
          <tr>
            <td>Cats</td>
            <td> Feed a balanced diet and provide fresh water. - Provide a litter box and keep it clean. - Enrichment with toys and scratching posts. - Regular grooming (especially for long-haired breeds). - Routine vaccinations and parasite control. - Regular vet check-ups.</td>
            <td>- Watch for changes in litter box habits. - Dental care is crucial. - Spaying/neutering if not breeding. - Be alert for feline-specific diseases (e.g., Feline Leukemia Virus). - Monitor for obesity.</td>
          </tr>
          <tr>
            <td>Horses</td>
            <td>- Clean the cage regularly and provide fresh food and water daily. - Offer toys and mental stimulation. - Maintain proper temperature and humidity. - Avoid drafts. - Routine vet check-ups. - Monitor for signs of illness (e.g., changes in behavior or plumage).</td>
            <td>- Ensure proper feather condition. - Be vigilant for respiratory issues. - Regular beak and nail trimming may be necessary. - Watch for egg-related problems in females. - Monitor for feather plucking.</td>
          </tr>
          <tr>
            <td>Fish</td>
            <td>- Maintain a clean and properly filtered aquarium. - Monitor water temperature and chemistry. - Avoid overfeeding. - Quarantine new fish to prevent disease. - Provide appropriate tank mates. - Regularly clean the substrate and change water as needed.</td>
            <td>- Keep an eye on water quality (pH, ammonia, nitrites). - Watch for signs of disease (e.g., white spots, fin rot). - Isolate sick fish to prevent the spread of illness. - Avoid overstocking the aquarium.</td>
          </tr>
          <tr>
            <td>Cows</td>
            <td> Provide a clean and sheltered area for cows. - Ensure a balanced diet mainly consisting of grass or hay and fresh water. - Allow access to pasture for grazing. - Keep living areas clean and dry. - Handle cows gently and avoid sudden movements. - Provide companionship.</td>
            <td>- Vaccinate against common bovine diseases. - Implement a deworming program. - Regular hoof care and inspections. - Schedule regular veterinary check-ups. - Monitor for signs of calving difficulties.</td>
          </tr>
          <tr>
            <td>Reptiles</td>
            <td>- Provide an appropriate enclosure with temperature and humidity control. - Offer a diet specific to the species. - Regular cleaning and sanitization of the enclosure. - Provide UVB lighting for some species. - Regular vet check-ups for species-specific health concerns.</td>
            <td>- Maintain proper temperature and humidity gradients. - Monitor for skin and respiratory issues. - Be aware of potential metabolic bone disease. - Ensure proper UVB exposure.</td>
          </tr>
          <tr>
            <td>Pigs</td>
            <td>- Offer a clean and well-ventilated shelter. - Provide a balanced diet with access to forage and fresh water. - Regularly trim hooves and inspect for signs of hoof rot. - Monitor for signs of internal parasites. - Socialize and provide companionship for goats.</td>
            <td>- Vaccinate against common goat diseases, such as Clostridium perfringens. - Implement a deworming program. - Regular veterinary check-ups. - Be vigilant for signs of bloat and urinary calculi. - Ensure proper nutrition for pregnant and lactating goats.</td>
          </tr>
          <tr>
            <td>Rabbits</td>
            <td>- Provide a clean and spacious hutch or enclosure. - Offer a diet consisting of hay, fresh vegetables, and water. - Provide mental stimulation with toys and objects to chew on. - Regularly trim nails and monitor dental health. - Socialize and handle rabbits gently.</td>
            <td>- Watch for signs of dental problems, such as overgrown teeth. - Be aware of respiratory issues. - Regular vet check-ups for vaccinations and spaying/neutering. - Monitor for obesity. - Protect from heat stress and provide shade in hot weather.</td>
          </tr>
          <tr>
            <td>Sheep</td>
            <td>- Offer a clean and sheltered area for sheep. - Provide a balanced diet with access to pasture and fresh water. - Regularly trim hooves and inspect for signs of foot rot. - Monitor for signs of internal parasites. - Socialize and provide companionship for sheep.</td>
            <td>- Vaccinate against common sheep diseases, such as Clostridium perfringens. - Implement a deworming program. - Regular veterinary check-ups. - Watch for signs of respiratory issues. - Ensure proper nutrition for pregnant and lactating ewes.</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default well