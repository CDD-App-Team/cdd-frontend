/* eslint-disable react/prop-types */
import { 
  InputControl, 
  FormButton,
SelectControl
} from '../Forms/FormControls.js';
import useSearchForm from '../../hooks/use-search-form.js';
import styles from './Search.css';

export default function SearchForm({ onSubmit }) {
  const { 
    name, 
    setName, 
    race, 
    setRace
  } = useSearchForm();
  
  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    onSubmit(formDataObject);
    // console.log('formData', formDataObject);
  };
  return (
    <form onSubmit={formSubmit} className={styles.SearchForm}>
      <InputControl
        type="text"
        placeholder="Search By Name "
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <SelectControl
        name="race"
        placeholder="Search By Race"
        value={race}
        onChange={(e) => setRace(e.target.value)}
      >
        <option value={'Hylian'}>Hylian</option>
        <option value={'Minish'}>Minish</option>
        <option value={'Sheikah'}>Sheikah</option>
        <option value={'Gerudo'}>Gerudo</option>
        <option value={'Rito'}>Rito</option>
        <option value={'Mogma'}>Mogma</option>
        <option value={'Human'}>Human</option>
        <option value={'Fairy'}>Fairy</option>
        <option value={'Female Shadow Bug'}>Female Shadow Bug</option>
        <option value={'Wind Tribe'}>Wind Tribe</option>
        <option value={'Goron'}>Goron</option>
        <option value={'Bee'}>Bee</option>
        <option value={'Zora'}>Zora</option>
        <option value={'Horse'}>Horse</option>
        <option value={'Lokomo'}>Lokomo</option>
        <option value={'Phantom'}>Phantom</option>
        <option value={'Guardian Deity'}>Guardian Deity</option>
        <option value={'Korok'}>Korok</option>
        <option value={'Anouki'}>Anouki</option>
      </SelectControl>
      <FormButton type="submit">Search</FormButton>
    </form>
  );
}
