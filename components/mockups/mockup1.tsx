export default function Mockup1({
  desktopImageUrl,
  mobileImageUrl,
}: {
  desktopImageUrl?: string;
  mobileImageUrl?: string;
}) {
  return (
    <div className="widget-container">
      <div className="showcase-wrapper">
        <div className="laptop-mockup">
          <div className="laptop-screen">
            <div className="screen-content">
              <img
                src={
                  desktopImageUrl ||
                  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
                }
                alt="Desktop Website Preview"
              />
            </div>
          </div>
          <div className="laptop-base"></div>
        </div>

        <div className="phone-mockup">
          <div className="phone-notch"></div>
          <div className="phone-screen">
            <img
              src={
                mobileImageUrl ||
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=600'
              }
              alt="Mobile Website Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
