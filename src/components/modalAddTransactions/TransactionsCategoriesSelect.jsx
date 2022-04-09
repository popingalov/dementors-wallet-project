import Select, { components } from 'react-select';
import IndicatorArrow from '../../assets/images/icons/categories.svg';
export default function TransactionsCategoriesSelect() {
  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={IndicatorArrow} alt="" width="20px" height="20px" />
      </components.DropdownIndicator>
    );
  };
  const options = [
    { label: 'Shopping', value: 'Shopping' },
    { label: 'Car', value: 'Car' },
    { label: 'Food', value: 'Food' },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      width: '100%',
      backgroundColor: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(50%)',
    }),

    indicatorSeparator: () => ({
      display: 'none',
    }),

    indicatorsContainer: () => ({
      width: '20px',
      height: '20px',
      position: 'absolute',
      right: '8px',
      marginTop: '-26px',
    }),
    dropdownIndicator: () => ({
      width: '20px',
      height: '20px',
      padding: 0,
      paddingTop: '8px',
    }),
    control: () => ({
      width: '100%',
      borderBottom: '1px solid var(--placeholder-text-color)',
    }),

    placeholder: () => ({
      color: '#bdbdbd',
      position: 'absolute',
      paddingLeft: '10px',
      fontWeight: '400',
      fontSize: '18px',
    }),
    singleValue: () => ({
      position: 'absolute',
      paddingLeft: '10px',
    }),

    input: () => ({
      textAlign: 'left',
    }),
    option: provided => ({
      ...provided,
      textAlign: 'left',
      fontSize: '18px',
      backgroundColor: 'transparent',
      color: 'inherit',
      padding: '20px',
      '&:hover': {
        color: '#ff6596',
        backgroundColor: '#fff',
      },
      '&:active': {
        color: '#ff6596',
        backgroundColor: '#fff',
      },
      '&:focus': {
        color: '#ff6596',
        backgroundColor: '#fff',
      },
    }),
  };
  function onChangeCategory(value) {
    console.log(value);
  }
  return (
    <Select
      components={{ DropdownIndicator }}
      options={options}
      styles={customStyles}
      placeholder={'Выберите категорию'}
      onChange={onChangeCategory}
    />
  );
}
