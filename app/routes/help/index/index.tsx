import React from 'react'
import PageContainer from '~/components/page-container'
import SearchBox from '~/components/search-box'

const Help = () => {

  const data = [
    {
      title: 'Report',
      description: 'Learn how to report any issues or incidents that you encounter while using the platform.'
    },
    {
      title: 'Account Settings',
      description: 'Find out how to manage your account settings, including updating your profile information and changing your password.'
    },
    {
      title: 'Safety and Security',
      description: 'Learn about the measures we take to ensure the safety and security of our users and their data.'
    },
    {
      title: 'Privacy',
      description: 'Read about our privacy policy and how we protect your personal information.'
    },
    {
      title: 'Policies',
      description: 'View our terms and conditions, as well as our other policies and guidelines.'
    },
   
  ];

  return (
    <PageContainer>
      <div>
        <div className="flex flex-wrap gap-2 md:gap-[4rem] w-[95%] md:w-[75%] justify-center mx-auto">
          {data.map(({ title, description }, index) => (
            <div key={index} className="flex flex-col min-h-[12rem] max-w-[16rem] align-center gap-2 md:gap-4 text-textColor border border-textColor p-2 md:p-8">
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