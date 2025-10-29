import React from 'react';
import type { AppInfo } from '../types';

const StickerCropIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="8.59" y1="7.41" x2="15.41" y2="16.59" />
    <line x1="8.59" y1="16.59" x2="15.41" y2="7.41" />
  </svg>
);

const CreativeSuiteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 1.512l-6.675 3.337a.937.937 0 00-.545.927l1.684 8.419a.937.937 0 00.927.545l3.337-1.684a9 9 0 001.512-8.862M12.75 3.031a9 9 0 016.363 12.363l1.684 3.337a.937.937 0 01-.545.927l-8.419 1.684a.937.937 0 01-.927-.545l-1.684-3.337a9 9 0 018.862-1.512" />
  </svg>
);

const TaskMasterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);


// TODO: 이 부분을 실제 앱 정보로 수정하세요. 아이콘, 이름, 설명 및 App Store URL을 업데이트해야 합니다.
// (TODO: Replace this with your actual app information. You need to update the icon, name, description, and App Store URL.)
const placeholderApps: AppInfo[] = [
  {
    icon: <StickerCropIcon />,
    name: '스티커 크롭 (Sticker Crop)',
    description: '사진을 스티커로 쉽게 잘라보세요. iMessage에서 친구, 가족과 공유하기 완벽합니다.',
    storeUrl: 'https://apps.apple.com/kr/app/%EC%8A%A4%ED%8B%B0%EC%BB%A4-%ED%81%AC%EB%A1%AD/id6754418208',
  },
  {
    icon: <CreativeSuiteIcon />,
    name: 'Creative Suite',
    description: 'Unleash your creativity with a full suite of tools for drawing, painting, and designing on the go.',
    storeUrl: 'https://apps.apple.com/kr/app/your-app-name/id0000000002', // <-- 실제 App Store URL로 교체하세요. (Replace with your real App Store URL)
  },
  {
    icon: <TaskMasterIcon />,
    name: 'TaskMaster Pro',
    description: 'The ultimate to-do list and task manager to keep your life organized and stress-free.',
    storeUrl: 'https://apps.apple.com/kr/app/your-app-name/id0000000003', // <-- 실제 App Store URL로 교체하세요. (Replace with your real App Store URL)
  },
];

const AppCard: React.FC<{ app: AppInfo }> = ({ app }) => (
  <div className="bg-primary/50 backdrop-blur-sm border border-secondary rounded-lg p-6 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="h-16 w-16 mb-4 flex items-center justify-center">{app.icon}</div>
    <h3 className="text-xl font-bold text-text-primary mb-2">{app.name}</h3>
    <p className="text-text-secondary flex-grow mb-4">{app.description}</p>
    <a
      href={app.storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto bg-accent text-background font-semibold py-2 px-6 rounded-lg hover:bg-secondary transition-colors duration-300"
    >
      View on App Store
    </a>
  </div>
);

const Apps: React.FC = () => {
  return (
    <section id="apps" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">My Applications</h2>
          <p className="mt-4 text-lg text-text-secondary">Here are some of the projects I've worked on.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderApps.map((app, index) => (
            <AppCard key={index} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;