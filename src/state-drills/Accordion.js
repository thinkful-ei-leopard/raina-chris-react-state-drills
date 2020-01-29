import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };

    state = {currentSectionIndex: null};

    handleSetActiveSection = (sectionIndex) => {
        this.setState({ currentSectionIndex: sectionIndex })
      }

    renderContent(section, idx, currentSectionIndex) {
        return(
            <li className='Accordion__item' key={idx}>
            <button
              type='button'
              onClick={() => this.handleSetActiveSection(idx)}
            >
              {section.title}
            </button>
            {(currentSectionIndex === idx) && <p>{section.content}</p>}
          </li>
        );
    }

    render() {
        const { currentSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul>
                {sections.map((section, idx) =>
                    this.renderContent(section, idx, currentSectionIndex)
                )}
            </ul>
        )
    }
    
}

export default Accordion;