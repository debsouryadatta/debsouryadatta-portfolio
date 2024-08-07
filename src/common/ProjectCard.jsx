import React, { useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';

function ProjectCard({ src, codeLink, externalLink, h3, p }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    backgroundColor: 'transparent',
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '300px',
    height: '250px',
    display: 'block',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };

  const iconContainerStyle = {
    display: 'flex',
    gap: '20px',
  };

  const iconStyle = {
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  };

  const textContainerStyle = {
    padding: '16px',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={imageContainerStyle}>
        <img src={src} alt={`${h3} logo`} style={imageStyle} />
        <div style={overlayStyle}>
          <div style={iconContainerStyle}>
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              <Code
                size={24}
                style={{
                  ...iconStyle,
                  transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                }}
              />
            </a>
            <a href={externalLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink
                size={24}
                style={{
                  ...iconStyle,
                  transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div style={textContainerStyle}>
        <h3 style={{ marginBottom: '8px'}}>{h3}</h3>
        <p style={{ margin: 0, color: 'inherit' }}>{p}</p>
      </div>
    </div>
  );
}

export default ProjectCard;