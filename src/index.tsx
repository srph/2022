import React from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'
import 'modern-normalize/modern-normalize.css'

import { theme } from './theme'
import { projects, settings } from './vars'

const App = () => {
  return (
    <>
      <Container>
        <WebHeading>
          <WebHeadingTitle>Kier Borromeo</WebHeadingTitle>
          <WebHeadingLinks>
            <WebHeadingLinkItem href={settings.urls.linkedin} target="_blank">
              LinkedIn
            </WebHeadingLinkItem>
            <WebHeadingLinkItem href={settings.urls.twitter} target="_blank">
              Twitter
            </WebHeadingLinkItem>
            <WebHeadingLinkItem href={settings.urls.twitter} target="_blank">
              GitHub
            </WebHeadingLinkItem>
            <WebHeadingLinkItem href={settings.urls.resume} target="_blank">
              Resume
            </WebHeadingLinkItem>
          </WebHeadingLinks>
        </WebHeading>

        {projects.map((project, i) => {
          return (
            <Project key={i}>
              <ProjectDetails>
                <ProjectTitle>{project.title}</ProjectTitle>

                <ProjectInformation>
                  <ProjectTags>
                    <ProjectTagItem highlight>{project.date}</ProjectTagItem>
                    {project.tags.map((tag, i) => (
                      <ProjectTagItem key={i}>{tag}</ProjectTagItem>
                    ))}
                  </ProjectTags>

                  <ProjectDescription>{project.description}</ProjectDescription>

                  <ProjectLinks>
                    {project.links.map((link, i) => (
                      <ProjectLinkItem key={i} href={link.url} target="_blank">
                        {link.title}
                      </ProjectLinkItem>
                    ))}
                  </ProjectLinks>
                </ProjectInformation>
              </ProjectDetails>

              <ProjectThumbnail>
                <ProjectThumbnailImage src={project.thumbnail.desktop} />
              </ProjectThumbnail>
            </Project>
          )
        })}
      </Container>
      <GlobalStyle />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fontFamily.sans};
    font-size: ${theme.fontSizes.regular}px;
    color: ${theme.colors.neutral[900]};
    background: ${theme.colors.bg};
  }
`

const Container = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  max-width: 992px;
  margin: 0 auto;
`

const WebHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  margin-bottom: 64px;

  @media ${theme.breakpoints.md} {
    margin-bottom: 200px;
  }
`

const WebHeadingTitle = styled.h1`
  margin: 0;
  font-family: ${theme.fontFamily.heading};
  font-size: ${theme.fontSizes.lg}px;

  @media ${theme.breakpoints.md} {
    font-size: ${theme.fontSizes.regular}px;
  }
`

const WebHeadingLinks = styled.div`
  display: flex;
  align-items: center;
`

const WebHeadingLinkItem = styled.a`
  display: none;
  color: ${theme.colors.neutral[500]};
  font-weight: 600;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 24px;
  }

  &:hover {
    color: ${theme.colors.neutral[700]};
  }

  @media ${theme.breakpoints.md} {
    display: block;
  }
`

const Project = styled.div`
  margin-bottom: 80px;

  @media ${theme.breakpoints.md} {
    margin-bottom: 120px;
  }
`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  @media ${theme.breakpoints.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const ProjectTitle = styled.h1`
  flex-shrink: 0;
  font-size: ${theme.fontSizes.heading}px;
  font-family: ${theme.fontFamily.heading};
  margin: 0;
  margin-bottom: 16px;

  @media ${theme.breakpoints.md} {
    margin-right: 16px;
    margin-bottom: 0;
  }
`

const ProjectInformation = styled.div`
  max-width: 520px;
`

const ProjectTags = styled.div`
  display: flex;
  margin-bottom: 8px;

  @media ${theme.breakpoints.md} {
    margin-right: 16px;
  }
`

const ProjectTagItem = styled.div`
  font-size: ${theme.fontSizes.sm}px;
  font-weight: 600;
  color: ${(props) => (props.highlight ? theme.colors.neutral[900] : theme.colors.neutral[500])};

  &:not(:last-child) {
    margin-right: 16px;
  }
`

const ProjectDescription = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  line-height: 1.5;

  @media ${theme.breakpoints.md} {
    margin-right: 16px;
  }
`

const ProjectLinks = styled.div`
  display: flex;
`

const ProjectLinkItem = styled.a`
  padding-bottom: 4px;
  text-decoration: none;
  color: ${theme.colors.neutral[700]};
  font-size: ${theme.fontSizes.sm}px;
  font-weight: 600;
  border-bottom: 1px dashed ${theme.colors.neutral[400]};

  &:hover {
    color: ${theme.colors.neutral[900]};
    border-bottom-color: ${theme.colors.neutral[600]};
  }

  &:not(:last-child) {
    margin-right: 16px;
  }
`

const ProjectThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 370px;
  background: ${theme.colors.neutral[100]};
`

const ProjectThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

ReactDOM.render(<App />, document.getElementById('root'))
