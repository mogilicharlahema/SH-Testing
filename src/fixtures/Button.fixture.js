import Button from '../components/Button';

export default {
    component: <Button/>,
    ButtonWithProps: <Button label={'Click me'}
                             onClick={() => alert('Button clicked!')}
    />
};
