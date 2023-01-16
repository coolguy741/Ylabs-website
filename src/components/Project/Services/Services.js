import styles from './Services.module.css';

export const Services = ({ services }) => {
  console.log('Debug: services', services);
  return (
    <div class={styles.Container}>
      <div class={styles.Items}>
        {services.map((service, key) => {
          return (
            <div className={styles.Item} key={key}>
              <h1 className="deskTitleMedium">{service.title}</h1>
              <p className="deskTextRegular">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
