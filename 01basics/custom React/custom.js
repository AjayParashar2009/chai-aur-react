function customRender(reactElement,container){
        //   const domElement = document.createElement(reactElement.type)
        //   domElement.innerHTML = reactElement.Children
        //   domElement.setAttribute('href' , reactElement.props.href) 
        //   domElement.setAttribute('target' , reactElement.props.target) 
        //    container.appendChild(domElement)

         const domElement = document.createElement(reactElement.type)
         domElement.innerHTML =  reactElement.Children
         for (const props in reactElement.props) {
            if (props === 'Childern') continue 
            domElement.setAttribute(props,reactElement.props[props])
         }

           container.appendChild(domElement)


}


const reactElement = {
    type: 'a',
    props: {
        href: 'vid5.mp4',
        target: '_blank',
    },
    Children: 'click me'

}

const maincontainer = document.querySelector('#root')

customRender(reactElement,maincontainer)