import React from 'react';

const Privacy: React.FC = () => {
  return (
    <section id="privacy" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">스티커 크롭 개인정보 처리방침</h2>
          </div>
          
          <div className="bg-primary/50 border border-secondary rounded-lg p-8 text-text-secondary">
            <div className="prose prose-invert max-w-none prose-p:text-text-secondary prose-headings:text-text-primary prose-a:text-accent hover:prose-a:underline">
                <h1 className="text-2xl font-bold text-text-primary mb-4">개인정보 처리방침</h1>
                <p className="text-sm mb-6">최종 수정일: 2025년 1월 24일</p>
                
                <h2 className="text-xl font-bold mt-8 mb-2">1. 수집하는 정보</h2>
                <p>본 앱은 사용자의 개인정보를 직접 수집하지 않습니다. 모든 이미지 처리는 기기 내에서 이루어집니다.</p>
                
                <h2 className="text-xl font-bold mt-8 mb-2">2. 광고</h2>
                <p>본 앱은 Google AdMob을 통해 광고를 표시합니다. AdMob은 광고 개인화를 위해 광고 ID 등의 정보를 수집할 수 있습니다. 자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google 개인정보처리방침</a>을 참조하세요.</p>
                
                <h2 className="text-xl font-bold mt-8 mb-2">3. 데이터 보안</h2>
                <p>업로드된 이미지는 서버로 전송되지 않으며, 모든 처리는 사용자 기기 내에서 이루어집니다.</p>
                
                <h2 className="text-xl font-bold mt-8 mb-2">4. 문의</h2>
                <p>Instagram: <a href="https://instagram.com/zziraengi" target="_blank" rel="noopener noreferrer">@zziraengi</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;