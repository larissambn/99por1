import User from './usuários/usuario';
import Elderly from './usuários/idoso';
import Tutor from './usuários/representante';
import Location from './localização';
import ServiceCategory from './grupos/grupoDeServiço';
import ServiceType from './tipos/tipoDeServiço';
import Service from './funcionalidades/servico';
import ServiceRequest from './pedidos/pedidoServiço';
import DonationCategory from './grupos/grupoDeDoação'
import DonationType from './tipos/tipoDeDoação';
import Donation from './funcionalidades/doacao';
import DonationRequest from './pedidos/pedidoDoação';
import ActivityCategory from './grupos/grupoDeAtividades';
import ActivityType from './tipos/tipoDeAtividade';
import Activity from './funcionalidades/atividades';
import ActivityRequest from './pedidos/pedidoAtividades';
import ServiceReview from './avaliação/avaliacaoServiço';
import DonationReview from './avaliação/avaliaçãoDoação';
import ActivityReview from './avaliação/avaliaçãoAtividade';

// Relacionamentos entre User e Elderly
User.hasOne(Elderly, { foreignKey: 'user_id' });
Elderly.belongsTo(User, { foreignKey: 'user_id' });

// Relacionamentos entre Elderly e Tutor
Elderly.belongsTo(Tutor, { foreignKey: 'tutor_id' });
Tutor.hasMany(Elderly, { foreignKey: 'tutor_id' });

// Relacionamentos entre User e Tutor
User.hasOne(Tutor, { foreignKey: 'user_id' });
Tutor.belongsTo(User, { foreignKey: 'user_id' });

// Relacionamentos entre Elderly e Location
Elderly.belongsTo(Location, { foreignKey: 'location_id' });
Location.hasMany(Elderly, { foreignKey: 'location_id' });

// Relacionamentos entre Elderly e Service
Elderly.hasMany(Service, { foreignKey: 'elderly_id' });
Service.belongsTo(Elderly, { foreignKey: 'elderly_id' });

// Relacionamentos entre ServiceType e Service
ServiceType.hasMany(Service, { foreignKey: 'serviceType_id' });
Service.belongsTo(ServiceType, { foreignKey: 'serviceType_id' });

// Relacionamentos entre ServiceCategory e ServiceType
ServiceCategory.hasMany(ServiceType, { foreignKey: 'category_name_id' });
ServiceType.belongsTo(ServiceCategory, { foreignKey: 'category_name_id' });

// Relacionamento entre ServiceRequest e Service
ServiceRequest.belongsTo(Service, { foreignKey: 'service_id' });
Service.hasMany(ServiceRequest, { foreignKey: 'service_id' });

// A ServiceRequest belongs to a User (the user requesting the service)
ServiceRequest.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(ServiceRequest, { foreignKey: 'user_id' });

// Relacionamento entre Service e ServiceReview
Service.hasMany(ServiceReview, { foreignKey: 'service_id' });
ServiceReview.belongsTo(Service, { foreignKey: 'service_id' });

// Relacionamentos entre Elderly e Donation
Elderly.hasMany(Donation, { foreignKey: 'elderly_id' });
Donation.belongsTo(Elderly, { foreignKey: 'elderly_id' });

// Relacionamentos entre DonationType e Donation
DonationType.hasMany(Donation, { foreignKey: 'donationType_id' });
Donation.belongsTo(DonationType, { foreignKey: 'donationType_id' });

// Relacionamentos entre DonationCategory e DonationType
DonationCategory.hasMany(DonationType, { foreignKey: 'category_name_id' });
DonationType.belongsTo(DonationCategory, { foreignKey: 'category_name_id' });

// Relacionamento entre DonationRequest e Donation
DonationRequest.belongsTo(Donation, { foreignKey: 'Donation_id' });
Donation.hasMany(DonationRequest, { foreignKey: 'Donation_id' });

// A DonationRequest belongs to a User (the user requesting the Donation)
DonationRequest.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(DonationRequest, { foreignKey: 'user_id' });

// Relacionamento entre Donation e DonationReview
Donation.hasMany(DonationReview, { foreignKey: 'donation_id' });
DonationReview.belongsTo(Donation, { foreignKey: 'donation_id' });

// Relacionamentos entre Elderly e Activity
Elderly.hasMany(Activity, { foreignKey: 'elderly_id' });
Activity.belongsTo(Elderly, { foreignKey: 'elderly_id' });

// Relacionamentos entre ActivityType e Activity
ActivityType.hasMany(Activity, { foreignKey: 'ActivityType_id' });
Activity.belongsTo(ActivityType, { foreignKey: 'ActivityType_id' });

// Relacionamentos entre ActivityCategory e ActivityType
ActivityCategory.hasMany(ActivityType, { foreignKey: 'category_name_id' });
ActivityType.belongsTo(ActivityCategory, { foreignKey: 'category_name_id' });

// Relacionamento entre ActivityRequest e Activity
ActivityRequest.belongsTo(Activity, { foreignKey: 'Activity_id' });
Activity.hasMany(ActivityRequest, { foreignKey: 'Activity_id' });

// A ActivityRequest belongs to a User (the user requesting the Activity)
ActivityRequest.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(ActivityRequest, { foreignKey: 'user_id' });

// Relacionamento entre Activity e ActivityReview
Activity.hasMany(ActivityReview, { foreignKey: 'Activity_id' });
ActivityReview.belongsTo(Activity, { foreignKey: 'Activity_id' });

export { User, Elderly, Tutor, Location, ServiceCategory, ServiceType, Service, ServiceRequest, Donation, DonationCategory, DonationType, DonationRequest, Activity , ActivityCategory, ActivityType , ActivityRequest };
