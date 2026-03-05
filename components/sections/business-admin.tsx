import Image from 'next/image';
import StickyScroll from '../ui/sticky-scroll';

const BusinessAdministration = () => {
  return (
    <section className="w-full">
      <StickyScroll
        mainTitle="Streamlined Business Administration"
        mainDescription="InnoX connects departments, documents, and tasks to make operations smoothe"
        content={[
          {
            id: 1,
            title: 'Onboarding and Recruitment',
            description:
              'Manage job postings, applications, and onboarding tasks with ease.',
            content: (
              <Image
                height={400}
                width={640}
                src="https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Onboarding"
                className="rounded-md  h-[400px] object-cover "
              />
            ),
          },
          {
            id: 2,
            title: 'Employee Records',
            description:
              'Maintain secure, searchable staff profiles with role-based access.',
            content: (
              <Image
                src="https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Employee Records"
                height={400}
                width={640}
                className="rounded-md  h-[400px] object-cover "
              />
            ),
          },
          {
            id: 3,
            title: 'Onboarding and Recruitment',
            description:
              'Manage job postings, applications, and onboarding tasks with ease.',
            content: (
              <Image
                src="https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Onboarding"
                height={400}
                width={640}
                className="rounded-md  h-[400px] object-cover "
              />
            ),
          },
          {
            id: 4,
            title: 'Employee Records',
            description:
              'Maintain secure, searchable staff profiles with role-based access.',
            content: (
              <Image
                src="https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Employee Records"
                height={400}
                width={640}
                className="rounded-md  h-[400px] object-cover "
              />
            ),
          },
          {
            id: 5,
            title: 'Attendance and Time Tracking',
            description:
              'Monitor punctuality, working hours, and leave with real-time visibility.',
            content: (
              <Image
                src="https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Attendance"
                height={400}
                width={640}
                className="rounded-md  h-[400px] object-cover "
              />
            ),
          },
        ]}
        position="right"
      />
    </section>
  );
};

export default BusinessAdministration;
