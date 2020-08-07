package controllers

import javax.inject._

import play.api.libs.json.Json
import play.api.mvc._

import repositories.Profile
import services.ApiService

@Singleton
class ApiController @Inject()(
  cc: ControllerComponents,
  apiService: ApiService
) extends AbstractController(cc) {

  def getIndex(): Action[AnyContent] = Action { implicit request =>
    val profile = apiService.getProfile getOrElse BadRequest("Nah")
    println(profile.toString)

    Ok("Still fetching profile...")
  }
}