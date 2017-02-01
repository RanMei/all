React.createElement();


Virtual DOM


The classes you defined will inherit the class of ReactComponent.

this.setState
This function will inform React which part of your model is changed.


Object.assign( target,src1,src2 )

class > 

getDefaultProps ()
componentWillMount ()
componentDidMount ()
componentWillReceiveProps (newProps) {}
shouldComponentUpdate ()
componentWillUpdate ()
componentDidUpdate ()
componentWillUnmount ()

function ReactElement()

ReactMount.render =

ReactDOM.render = ReactMount.render;



ReactDOM.render(nextElement,container,callback)
	return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
		ReactElement.isValidElement(nextElement)?
		var prevComponent = getTopLevelWrapperInContainer(container);
		var reactRootElement = getReactRootElementInContainer(container);
		var component = 
			ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, nextContext)
				var componentInstance = instantiateReactComponent(nextElement, false);
				
				return componentInstance;
			._renderedComponent

			.getPublicInstance();

// create and return a reactElement which is a plain-object
React.createElement(type,config,children)
	var props = {};
	var childrenLength = arguments.length - 2;
	if (type && type.defaultProps)
	return ReactElement();
		var element = {
			$$typeof: REACT_ELEMENT_TYPE,
			type: type,
			key: key,
			ref: ref,
			props: props,
			_owner: owner
		};
		return element;// a plain-object