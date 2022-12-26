import Food_typeList from "./food_typeList";
import FindFood_Type from "./findFood_Type";

const Component = () => {
  return (
    <div className="mb-5" style={{textAlign: 'center'}}>
        <div style={{margin:20}}>        <h1>Добро пожаловать в нашу столовую!</h1>
            <h5>Всегда самые вкусные и свежие блюда! Что вы хотите приобрести?</h5></div>

      <Food_typeList />
        <FindFood_Type />
    </div>
  );
};

export default Component;
