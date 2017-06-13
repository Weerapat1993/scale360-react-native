export const onPrev = (props) =>{
  const { routes, onPrev, navigator } = props
  const Actions = routes;
  if (onPrev){
      onPrev();
      return;
  }
  if (navigator && navigator.getCurrentRoutes().length > 1){
      Actions.pop();
  }
}