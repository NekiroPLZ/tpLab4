/* eslint-disable react/prop-types */
function Tooltip(Component) {
  const WrappedComponent = () => {
    return <Component />;
  };
  return WrappedComponent;
}

export default Tooltip;
// El componente Tooltip debe envolver a otro componente y mostrar un mensaje de información cuando el usuario pase el cursor sobre él.
// //
