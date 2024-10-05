import ServiceRequest from '../models/pedidos/pedidoServiço.js';

// Controller for the tutor to accept or deny service requests on behalf of the elderly
export const manageServiceRequest = async (req, res) => {
  const { requestId } = req.params;
  const { action } = req.body; // 'accept', 'deny', or 'finish'

  try {
    // Fetch the service request
    const serviceRequest = await ServiceRequest.findById(requestId);

    const currentDate = new Date();

    if (!serviceRequest) {
      return res.status(404).json({ message: 'Service request not found' });
    }

    // Handle the accept/deny/finish logic
    if (action === 'accept') {
      serviceRequest.status = 'Approved';
    } else if (action === 'deny') {
      serviceRequest.status = 'Denied';
    } else if (action === 'finish') {
      serviceRequest.status = 'Finished';
      serviceRequest.completion_date = currentDate;
    } else {
      return res.status(400).json({ message: 'Invalid action. Must be either "accept", "deny", or "finish"' });
    }

    // Save the updated service request
    await serviceRequest.save();

    return res.json({ message: `Service request ${action}ed successfully`, serviceRequest });
  } catch (error) {
    return res.status(500).json({ message: 'Error managing service request', error });
  }
};
