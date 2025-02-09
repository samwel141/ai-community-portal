import React from 'react'
import PageContainer from '~/components/page-container'
import SearchBox from '~/components/search-box'

const Help = () => {

  const data = [
    {
      title: 'Getting Started',
      description: 'Learn how to navigate the platform and get started with your first project.'
    },
    {
      title: 'FAQs',
      description: 'Frequently asked questions about the platform and how to use it.'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions to help you troubleshoot any problems you may encounter.'
    },
    {
      title: 'Glossary',
      description: 'A list of terms and definitions to help you understand the platform and its features.'
    },
    {
      title: 'Tutorials',
      description: 'Step-by-step guides on how to use the platform and its features.'
    },
    {
      title: 'API Documentation',
      description: 'Technical documentation for developers who want to integrate the platform with their own applications.'
    },
    {
      title: 'API Documentation',
      description: 'Technical documentation for developers who want to integrate the platform with their own applications.'
    },
    {
      title: 'API Documentation',
      description: 'Technical documentation for developers who want to integrate the platform with their own applications.'
    }
  ];

  return (
    <PageContainer>
      <div>
        <div className="flex justify-center my-4 md:my-[4rem]">
        <SearchBox className="w-[100%] md:w-[140%]"/>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-6 w-[95%] md:w-[80%] justify-center mx-auto">
          {data.map(({ title, description }, index) => (
            <div key={index} className="flex flex-col min-h-[12rem] max-w-[12rem] align-center gap-2 md:gap-4 text-textColor border border-textColor p-2 md:px-8">
              <h1 className="text-sm text-center font-bold">{title}</h1>
              <p className="text-sm text-center text-gray-300">{description}</p>
            </div>
          ))}

        </div>
      </div>
    </PageContainer>
  )
}

export default Help