import ServiceRequest from '../models/ServiceRequest';

// Controller for the tutor to accept or deny service requests on behalf of the elderly
export const manageServiceRequest = async (req, res) => {
  const { requestId } = req.params;
  const { action } = req.body; // 'accept' or 'deny'

  try {
    // Fetch the service request
    const serviceRequest = await ServiceRequest.findByPk(requestId);

    const currentDate = new Date();

    if (!serviceRequest) {
      return res.status(404).json({ message: 'Service request not found' });
    }

    // Handle the accept/deny logic
    if (action === 'accept') {
      serviceRequest.status = 'Approved';
    } else if (action === 'deny') {
      serviceRequest.status = 'Denied';
    } else if (action === 'finish') {
      // Allow the elderly to manually finish the service request
      serviceRequest.status = 'Finished';
      serviceRequest.completion_date = currentDate;
    } else {
      return res.status(400).json({ message: 'Invalid action. Must be either "accept" or "deny"' });
    }

    if (serviceRequest.completion_date && currentDate > serviceRequest.completion_date) {
      if (action === 'Finished') {
        serviceRequest.status = 'Finished'; 
        return res.json({ message: 'Service request has been marked as finished', serviceRequest });
      }
    }

    // Save the updated service request
    await serviceRequest.save();

    return res.json({ message: `Service request ${action}ed successfully`, serviceRequest });
  } catch (error) {
    return res.status(500).json({ message: 'Error managing service request', error });
  }
};



